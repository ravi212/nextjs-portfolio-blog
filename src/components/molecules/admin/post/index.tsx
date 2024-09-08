"use client";
import { createPost, editPost, getPostById } from "@/lib/actions/post.action";
import { generateSlug } from "@/utils/common";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "suneditor/dist/css/suneditor.min.css";
import Spinner from "@/components/atoms/common/Spinner";

// Validation schema with Yup
const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters long"),
  slug: Yup.string()
    .required("Slug is required")
    .matches(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase and can only contain letters, numbers, and hyphens"
    ),
  content: Yup.string()
    .required("Contents are required")
    .min(10, "Contents must be at least 10 characters long"),
});

const PostEdit = ({ postId }: { postId?: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Formik with useFormik hook
  const formik = useFormik({
    initialValues: {
      title: "",
      slug: "",
      content: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      let res;
      if (postId) {
        res = await editPost(postId, values);
      } else {
        res = await createPost(values);
      }
      setIsLoading(false);
    },
  });

  //generate slug
  useEffect(() => {
    const title = formik.values.title;
    formik.setFieldValue("slug", generateSlug(title));
  }, [formik.values]);

  useEffect(() => {
    if (postId) {
      getPostToEdit();
    }
  }, [postId]);

  //get post by id when in edit mode
  const getPostToEdit = async () => {
    const result = await getPostById(postId);
    if (result?.success) {
      const post = result?.post;
      formik.setValues(post);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="h-full gap-4 flex flex-col">
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
        <label className="text-lg font-normal" htmlFor="title">
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
          <p>{formik.errors.slug}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg font-normal" htmlFor="content">
          Content
        </label>
        <SunEditor
          name="content"
          onChange={(value) => formik.setFieldValue("content", value)}
          onBlur={formik.handleBlur}
          setContents={formik.values.content}
          setOptions={{
            buttonList: [
              ["undo", "redo"],
              ["font", "fontSize", "formatBlock"],
              ["bold", "underline", "italic"],
              ["fontColor", "hiliteColor"],
              ["removeFormat"],
              ["outdent", "indent"],
              ["align", "horizontalRule", "list"],
              ["table", "link", "image"],
              ["fullScreen", "preview", "codeView"],
            ],
            height: "300px",
          }}
          height="100%"
          placeholder="Enter post content here..."
        />
        {formik.touched.content && formik.errors.content ? (
          <p>{formik.errors.content}</p>
        ) : null}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-red-500 rounded-lg px-6 py-3 cursor-pointer text-base font-medium text-white shadow-lg"
        >
          {isLoading && <Spinner />}

          {!isLoading && <p>Save</p>}
        </button>
      </div>
    </form>
  );
};

export default PostEdit;
