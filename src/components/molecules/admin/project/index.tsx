"use client";
import { generateSlug } from "@/utils/common";
import { Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import {
  ErrorMessage,
  Field,
  FieldArray,
  FormikProvider,
  useFormik,
} from "formik";
import * as Yup from "yup";
import Spinner from "@/components/atoms/common/Spinner";
import { Platforms } from "@/constants/admin.const";
import {
  createProject,
  editProject,
  getProjectById,
} from "@/lib/actions/project.action";
import { uploadAsBase64 } from "@/lib/actions/common.action";
import Image from "next/image";
import TextArea from "antd/es/input/TextArea";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { getAllCategories } from "@/lib/actions/category.action";
const { Option } = Select;

// Validation schema with Yup
const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters long"),
  slug: Yup.string()
    .required("Slug is required")
    .matches(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase and can only contain letters, numbers, and hyphens",
    ),
  description: Yup.string()
    .required("Description is required")
    .min(20, "Description must be at least 20 characters long"),
  platform: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string().required("Title is required"),
        link: Yup.string().required("Link is required"),
      }),
    )
    .required("Platform is required")
    .min(1, "Atleast one platform is required"),
  technologies: Yup.array()
    .of(Yup.string())
    .required("Platform is required")
    .min(1, "Atleast one technlogogy is required"),
  coverImage: Yup.string().required("Cover image is required"),
  category: Yup.string().required("Category is required"),
});

const ProjectEdit = ({
  projectId,
  closeModal,
}: {
  projectId?: string;
  closeModal: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState("");
  const [imageSuccess, setImageSuccess] = useState("");
  const [projectError, setProjectError] = useState("");
  const [projectSuccess, setProjectSuccess] = useState("");
  const [categories, setCategories] = useState<CategoryType[]>([]);
  // Initialize Formik with useFormik hook
  const formik = useFormik({
    initialValues: {
      title: "",
      slug: "",
      description: "",
      technologies: [],
      platform: [{ title: "", link: "" }],
      coverImage: "",
      github: "",
      category: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setImageError("");
      setImageSuccess("");
      setProjectSuccess("");
      setProjectError("");
      setIsLoading(true);
      let res;
      if (projectId) {
        res = await editProject(projectId, values);
        if (res?.success) {
          setIsLoading(false);
          setProjectSuccess("Project Updated SucccessFully!");
          setTimeout(() => {
            setProjectSuccess("");
            setProjectError("");
            formik.resetForm();
            closeModal();
          }, 200);
        } else {
          setIsLoading(false);
          setProjectError(res?.error);
        }
      } else {
        res = await createProject(values);
        if (res?.success) {
          setIsLoading(false);
          setProjectSuccess("Project Added SucccessFully!");
          setTimeout(() => {
            setProjectSuccess("");
            setProjectError("");
            formik.resetForm();
            closeModal();
          }, 200);
        } else {
          setIsLoading(false);
          setProjectError(res?.error);
        }
      }
    },
  });

  const handleFileUpload = async (event) => {
    setImageError("");
    setImageSuccess("");

    const file = event.currentTarget.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const response = await uploadAsBase64(formData);

      if (response.success) {
        formik.setFieldValue("coverImage", response?.image);
        setImageSuccess("Image Uploaded SuccessFully!");
      } else {
        setImageError("Error Uploading Image!");
      }
    }
  };

  //generate slug
  useEffect(() => {
    const title = formik.values.title;
    formik.setFieldValue("slug", generateSlug(title));
  }, [formik.values]);

  useEffect(() => {
    async function getCategories() {
      const {categories, success} = await getAllCategories();
      if (!success) {
        return;
      }
      if (categories?.length === 0) {
        return;
      }
      setCategories(categories);
    }

    getCategories();
  }, []);

  useEffect(() => {
    if (projectId) {
      formik.resetForm();
      getProjectToEdit();
    }
  }, [projectId]);

  //get by id when in edit mode
  const getProjectToEdit = async () => {
    formik.resetForm();
    const result = await getProjectById(projectId);
    if (result?.success) {
      const project = result?.project;
      formik.setValues(project);
    }
  };

  // Handle change of Select component
  const handlePlatformChange = (value, index) => {
    const newPlatform = {
      title: value,
      link: "",
    };
    formik.values.platform.splice(index, 1, newPlatform);
    formik.setFieldValue("platform", formik.values.platform);
  };

  // Handle change of Select component
  const handleTechnologyChange = (value) => {
    formik.setFieldValue("technologies", value);
  };

  const handleCategoryChange = (value) => {
    formik.setFieldValue("category", value);
  };

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="h-full gap-4 py-4 flex flex-col"
      >
        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal" htmlFor="title">
            Title
          </label>
          <Input
            id="title"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            size="large"
            placeholder="Enter title..."
          />
          {formik.touched.title && formik.errors.title ? (
            <p className="text-red-500 text-base font-normal">
              {formik.errors.title}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal" htmlFor="slug">
            Slug
          </label>
          <Input
            placeholder="Enter Slug..."
            size="large"
            id="slug"
            name="slug"
            type="text"
            value={formik.values.slug}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.slug && formik.errors.slug ? (
            <p className="text-red-500 text-base font-normal">
              {formik.errors.slug}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal" htmlFor="technologies">
            Category
          </label>

          <Select
            id="category"
            placeholder="Select Category"
            value={formik.values.category}
            onChange={handleCategoryChange}
            onBlur={formik.handleBlur}
            size="large"
          >
            {categories &&
              categories
                ?.map((category, index) => (
              <Option key={index} value={category._id}>
                {`${category.title}`}
              </Option>
            ))}
          </Select>

          {formik.touched.category && formik.errors.category ? (
            <p className="text-red-500 text-base font-normal">
              {formik.errors.category}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal" htmlFor="description">
            Description
          </label>
          <TextArea
            placeholder="Enter description..."
            size="large"
            id="description"
            name="description"
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description ? (
            <p className="text-red-500 text-base font-normal">
              {formik.errors.description}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal" htmlFor="platform">
            Platform
          </label>
          <FieldArray name="platform">
            {({ push, remove }) => (
              <>
                {formik.values.platform.map((item, index) => (
                  <div
                    key={index}
                    className="flex w-full gap-2 items-start justify-between"
                  >
                    <div className="flex flex-col w-1/4 justify-center">
                      <Field
                        name={`platform.${index}.title`}
                        className="w-full"
                      >
                        {({ field }) => (
                          <Select
                            value={`platform.${index}.title`}
                            {...field}
                            id={`platform`}
                            onChange={(value) =>
                              handlePlatformChange(value, index)
                            }
                          >
                            <Option value="">Select Platform</Option>
                            {Platforms.map((platform, ind) => (
                              <Option key={ind} value={platform}>
                                {platform}
                              </Option>
                            ))}
                          </Select>
                        )}
                      </Field>

                      <ErrorMessage
                        name={`platform.${index}.title`}
                        component="div"
                        className="text-red-400 text-sm"
                      />
                    </div>

                    <div className="flex w-3/4 flex-col justify-center">
                      <Field
                        name={`platform.${index}.link`}
                        placeholder={`Enter Link`}
                      >
                        {({ field }) => (
                          <Input {...field} placeholder="Enter Link" />
                        )}
                      </Field>

                      <ErrorMessage
                        name={`platform.${index}.link`}
                        component="div"
                        className="text-red-400 text-sm"
                      />
                    </div>

                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => remove(index)}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="p-2 rounded-md shadow-md text-white text-base flex items-center justify-center gap-1 bg-red-500"
                  onClick={() => push({ title: "", link: "" })}
                >
                  <AddIcon />
                  <span>Add Platform</span>
                </button>
              </>
            )}
          </FieldArray>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal" htmlFor="github">
            Github
          </label>
          <Input
            id="github"
            name="github"
            type="text"
            value={formik.values.github}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size="large"
            placeholder="https://"
          />
          {formik.touched.github && formik.errors.github ? (
            <p className="text-red-500 text-base font-normal">
              {formik.errors.github}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal" htmlFor="technologies">
            Technologies
          </label>

          <Select
            id="technologies"
            mode="tags"
            placeholder="Add Technologies"
            value={formik.values.technologies}
            onChange={handleTechnologyChange}
            onBlur={formik.handleBlur}
            size="large"
          >
            {formik.values?.technologies?.map((tag, index) => (
              <Option key={index} value={tag}>
                {tag}
              </Option>
            ))}
          </Select>

          {formik.touched.technologies && formik.errors.technologies ? (
            <p className="text-red-500 text-base font-normal">
              {formik.errors.technologies}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-normal" htmlFor="coverImage">
            Cover Image
          </label>
          <Input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleFileUpload}
          />
          {formik.errors.coverImage && formik.touched.coverImage ? (
            <div className="text-red-500">{formik.errors.coverImage}</div>
          ) : null}
          {imageError && <p className="text-red-500">{imageError}</p>}
          {imageSuccess && <p className="text-green-500">{imageSuccess}</p>}
        </div>

        {formik.values.coverImage && (
          <div className="relative w-[100%] md:w-[100%] h-[auto] overflow-hidden">
            <Image
              width={900}
              height={900}
              src={formik.values.coverImage}
              alt="Image preview"
              className="w-[100%] object-cover"
            />
          </div>
        )}

        <div className="flex justify-end items-center gap-4 py-3">
          {projectError && (
            <p className="text-red-500 text-base">{projectError}</p>
          )}
          {projectSuccess && (
            <p className="text-green-500 text-lg">{projectSuccess}</p>
          )}
          <button
            type="submit"
            className="bg-red-500 rounded-lg px-6 py-3 cursor-pointer text-base font-medium text-white shadow-lg"
          >
            {isLoading && <Spinner />}

            {!isLoading && <p>Save</p>}
          </button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default ProjectEdit;
