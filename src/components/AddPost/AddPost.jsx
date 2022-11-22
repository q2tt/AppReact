import React from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/posts/postsActions";
import { Formik } from "formik";
import s from "./AddPost.module.scss";

const AddPost = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ title: "", body: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          } else if (!/^[a-zA-Z ]+$/i.test(values.title)) {
            errors.title = "Invalid name";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(addPost(values));
          setSubmitting(false);
          resetForm({});
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              className={s.form__title}
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              placeholder="write a title"
            />
            <p className={s.form__error}>
              {errors.title && touched.title && errors.title}{" "}
            </p>
            <input
              className={s.form__text}
              type="text"
              name="body"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
              placeholder="write your post"
            />
            <button
              className={s.form__btn}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddPost;
