import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const quizSchema = Yup.object().shape({
    topic: Yup.string().min(3, 'Too short!').required('This field is required!'),
    time: Yup.number()
      .min(10, 'Min 10 mins')
      .max(45, 'Max 45 mins')
      .required('This field is required!'),
    questions: Yup.number()
      .min(3, 'Min 3 questions')
      .required('This field is required!'),
    level: Yup.string()
      .oneOf(['beginner', 'intermediate', 'advanced'])
      .required('This field is required!'),
  });

export const QuizForm = ({ onAdd }) => {
    return <Formik
    initialValues={{
      topic: '',
      time: 0,
      questions: 0,
    }}
    validationSchema={quizSchema}
    onSubmit={(values, actions) => {
      onAdd(values);
      actions.resetForm();
    }}
  >
    <Form>
    <label>Topic 
    <Field name="topic" /></label>
    <ErrorMessage name="topic"/>
     
    <label>Questions 
    <Field name="questions" type='number' /></label>
    <ErrorMessage name="questions"/>

    <label>Time 
    <Field name="time" type='number' /></label>
    <ErrorMessage name="time"/>
    
    <label>Level 
    <Field as="select" name="level">
             <option value="beginner">Beginner</option>
             <option value="intermediate">Intermediate</option>
             <option value="advanced">Advanced</option>
    </Field></label>
    <ErrorMessage name="level"/>
    <button type="submit">Add quiz</button>
    </Form>
  </Formik>
}