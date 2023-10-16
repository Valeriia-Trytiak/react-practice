import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, StyledForm } from './QuizForm.styled';

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
    <StyledForm>
    <label>Topic 
    <Field name="topic" /></label>
    <ErrMessage name="topic"/>
     
    <label>Questions 
    <Field name="questions" type='number' /></label>
    <ErrMessage name="questions"/>

    <label>Time 
    <Field name="time" type='number' /></label>
    <ErrMessage name="time"/>
    
    <label>Level 
    <Field as="select" name="level">
             <option value="beginner">Beginner</option>
             <option value="intermediate">Intermediate</option>
             <option value="advanced">Advanced</option>
    </Field></label>
    <ErrMessage name="level"/>
    <button type="submit">Add quiz</button>
    </StyledForm>
  </Formik>
}