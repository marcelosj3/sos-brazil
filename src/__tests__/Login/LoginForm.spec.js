import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { LoginForm } from "../../components/Login/LoginForm";
import { BrowserRouter } from "react-router-dom";
import { api } from "../../services/api";
import MockAdapter from "axios-mock-adapter";
import { AppProvider } from "../../contexts";

const apiMock = new MockAdapter(api);

describe("Login Page", () => {
  it("should be able to sign in", async () => {
    apiMock.onPost("/login").replyOnce(200, {});

    render(
      <BrowserRouter>
        <LoginForm />{" "}
      </BrowserRouter>,
      { wrapper: AppProvider }
    );

    const emailField = screen.getByPlaceholderText("Digite seu email");
    const passwordField = screen.getByPlaceholderText("Digite sua senha");
    const buttonElement = screen.getByText("Entrar");

    fireEvent.change(emailField, { target: { value: "teste@test.com" } });
    fireEvent.change(passwordField, { target: { value: "1234" } });
    fireEvent.click(buttonElement);

    await waitFor(() => expect(emailField).toHaveValue("teste@test.com"));
    expect(passwordField).toHaveValue("1234");
  });
});
