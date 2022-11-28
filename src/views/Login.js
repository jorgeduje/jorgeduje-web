// import { useSkin } from "@hooks/useSkin"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Mail, GitHub } from "react-feather"
import InputPasswordToggle from "@components/input-password-toggle"
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button
} from "reactstrap"
import "@styles/react/pages/page-authentication.scss"
import { onLogin } from "../redux/authSlice/thunk"
import { useDispatch } from "react-redux"

const Login = () => {
  // const { skin } = useSkin()
const dispatch = useDispatch()
  // const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg"
    // source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        
        <Col className="d-none d-lg-flex align-items-center" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center">
            <img className="img-fluid" src={"https://res.cloudinary.com/dnqfh2chg/image/upload/v1669664143/Banner_de_YouTube_Gamer_Supervivencia_Negro_y_Amarillo_3_g9snui.png"} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Bienvenido a mi web 👋
            </CardTitle>
            <CardText className="mb-2">
              Inicia sesion para comenzar
            </CardText>
            <Form
              className="auth-login-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  placeholder="jorgeduje@example.com"
                  autoFocus
                />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                  <Link to="/forgot-password">
                    <small>Olvidaste tu contraseña?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="login-password"
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Recuerdame
                </Label>
              </div>
              <Button
                tag={Link}
                to="/"
                color="primary"
                block
                onClick={() => {
                  dispatch(onLogin({
                    email: "jorgeduje4@gmail.com",
                    password: "calme2626"
                  }))
                }
                }
              >
                Ingresar
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">Eres nuevo?</span>
              <Link to="/register">
                <span>Crear cuenta</span>
              </Link>
            </p>
            <div className="divider my-2">
              <div className="divider-text">or</div>
            </div>
            <div className="auth-footer-btn d-flex justify-content-center">
              
              <Button color="google">
                <Mail size={14} />
              </Button>
             
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
