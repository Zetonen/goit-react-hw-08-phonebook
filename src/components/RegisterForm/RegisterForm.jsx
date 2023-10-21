import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Form, Input, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, email, password } = form.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} >
      <Label>
        Username
        <Input
          type="text"
          name="name"
          placeholder="Введіть ім'я"
          title="Ім'я має містити лише літери, апострофи, дефіси та відступи"
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Введіть адресу електронної пошти"
          title="Будь ласка, введіть дійсну адресу електронної пошти"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          placeholder="Введіть пароль"
          title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
          required
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
