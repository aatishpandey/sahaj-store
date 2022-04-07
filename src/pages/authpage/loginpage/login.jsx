import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div class="form-main">
            <div class="cart-head">Login</div>
            <form class="form nav--shadow">
                <label for="email" class="card-head">
                    Enter Your Email
                </label>
                <input class="form-input" type="email" name="" id="email" />
                <label for="pass" class="card-head">
                    Enter Your Password
                </label>
                <input class="form-input" type="password" name="" id="pass" />

                <div class="forgot-pass">
                    <label for="remem" class="remem-fl">
                        <input type="checkbox" name="" id="remem" />
                        <p class="cart-text">Remember Me?</p>
                    </label>
                    <div class="cart-text">Forgot Password</div>
                </div>

                <button class="btn btn-primary">
                    Login
                </button>

                <Link to="/signup">
                    <div class="cart-text cursor-pointer ">Create New Account?</div>
                </Link>
            </form>
        </div>

    )
}

export {Login}