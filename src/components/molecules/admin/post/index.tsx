"use client"
import React, { useState } from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const PostEdit = () =>  {

    const handleSave = (contents: string) => {
        console.log("Saved content:", contents);
    };
		return (
			<div className="h-full">
               
            <SunEditor
                setOptions={{
                    buttonList: [
                        ['undo', 'redo'],
                        ['font', 'fontSize', 'formatBlock'],
                        ['bold', 'underline', 'italic'],
                        ['fontColor', 'hiliteColor'],
                        ['removeFormat'],
                        ['outdent', 'indent'],
                        ['align', 'horizontalRule', 'list'],
                        ['table', 'link', 'image'],
                        ['fullScreen', 'preview', 'codeView'],
                        ['save']
                    ],
                    height: '300px',
                }}
                height="100%"
                onSave={handleSave}
            />
			</div>
		);
	
}

export default PostEdit;