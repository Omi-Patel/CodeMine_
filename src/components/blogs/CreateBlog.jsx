import { Button, Input } from "@nextui-org/react";
import { Editor } from "@tinymce/tinymce-react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FileInput, Label } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fireDB, storage } from "../../firebase/firebaseConfig";
import { RiSendPlaneFill } from "react-icons/ri";

const CreateBlog = () => {
  const [blogs, setBlogs] = useState({
    title: "",
    category: "",
    content: "",
    time: Timestamp.now(),
  });
  const [text, setText] = useState("");
  //   console.log(text);
  //   console.log(blogs);

  const [thumbnail, setthumbnail] = useState();

  const navigate = useNavigate();

  // add Post
  const addPost = async () => {
    if (
      blogs.title === "" ||
      blogs.category === "" ||
      blogs.content === "" ||
      blogs.thumbnail === ""
    ) {
      return toast.error("Please Enter All Fields !");
    }
    // console.log(blogs)
    uploadImage();
  };

  //   upload image
  const uploadImage = () => {
    if (!thumbnail) return;
    const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
    uploadBytes(imageRef, thumbnail).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const productRef = collection(fireDB, "blogPost");
        try {
          addDoc(productRef, {
            blogs,
            thumbnail: url,
            time: Timestamp.now(),
            date: new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
          });
          navigate("/blog");
          toast.success("Post Added Successfully");
        } catch (error) {
          toast.error(error);
          console.log(error);
        }
      });
    });
  };

  // Create markup function
  function createMarkup(c) {
    return { __html: c };
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-full flex flex-col m-4">
      <div className="flex gap-2 items-center">
        <NavLink to={"/dashboard"}>
          <FaArrowAltCircleLeft size={25} />
        </NavLink>

        {/* Text  */}
        <h1 className="text-3xl">Create Blog</h1>
      </div>
      {/* First Input, Thumbnail */}
      <div className="my-4 w-[80%]">
        {thumbnail && (
          <img
            className=" w-full rounded-md mb-3 "
            src={thumbnail ? URL.createObjectURL(thumbnail) : ""}
            alt="thumbnail"
          />
        )}
        <div className="mb-2 block">
          <Label htmlFor="file-upload" value="Upload file" />
        </div>
        <label htmlFor="Thumbnail">Thumbnail</label>
        <FileInput
          onChange={(e) => setthumbnail(e.target.files[0])}
          id="file-upload"
        />
      </div>
      {/* Second Input, Name */}
      <div className="flex flex-col mt-4">
        <input
          type="text"
          placeholder="Enter Post Title"
          className="w-1/2 rounded-lg text-black"
          name="title"
          value={blogs.title}
          onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
        />
      </div>
      {/* Third Input, Category */}
      <div className="flex flex-col mt-4">
        <input
          type="text"
          placeholder="Enter Category"
          className="w-1/2 rounded-lg text-black"
          name="category"
          value={blogs.category}
          onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
        />
      </div>
      {/* Four Editor  */}
      <div className="mt-4">
        <label htmlFor="editor">Content Body /</label>

        {/* old editor */}
        {/* <Editor
          apiKey="wkcums0dw96tmwupjv7t1du24vt9934f2hjqrs4jrpizdc1y"
          onEditorChange={(newValue, editor) => {
            setBlogs({ ...blogs, content: newValue });
            setText(editor.getContent({ format: "text" }));
          }}
          onInit={(evt, editor) => {
            setText(editor.getContent({ format: "text" }));
          }}
          init={{
            plugins:
              "a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount",
          }}
        /> */}

        {/* new editor */}
        <Editor
          apiKey="4crjt6ksplh7a847suru8byqnn2eaxt0exm3ynkqmew9t2sv"
          onEditorChange={(newValue, editor) => {
            setBlogs({ ...blogs, content: newValue });
            setText(editor.getContent({ format: "text" }));
          }}
          onInit={(evt, editor) => {
            setText(editor.getContent({ format: "text" }));
          }}
          init={{
            plugins:
              "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
            ai_request: (request, respondWith) =>
              respondWith.string(() =>
                Promise.reject("See docs to implement AI Assistant")
              ),
          }}
          // initialValue="Welcome to TinyMCE!"
        />
      </div>
      {/* Fifth, Button */}
      <div className="mt-4">
        <Button
          onClick={addPost}
          color="success"
          variant="shadow"
          className="w-[10%] font-bold text-xl"
        >
          <span className="text-xl">
            <RiSendPlaneFill />
          </span>
          Send
        </Button>
      </div>
      <hr className="mt-6" />
      {/* Preview */}
      <div className="">
        <h1 className=" text-center mb-3 text-2xl">Preview</h1>
        <div className="content">
          <div
            className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                        
                        [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                        

                        [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                        

                        [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                        

                        [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                        

                        [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                        

                        [&>p]:text-[16px] [&>p]:mb-1.5
                        

                        [&>ul]:list-disc [&>ul]:mb-2
                        

                        [&>ol]:list-decimal [&>li]:mb-10
                        

                        [&>li]:list-decimal [&>ol]:mb-2
                        

                        [&>img]:rounded-lg
                        `}
            dangerouslySetInnerHTML={createMarkup(blogs.content)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
