import { Link } from "react-router-dom"

const Signup = () => {
    return(
        <div class="form-main">
        <div class="cart-head">Signup</div>
        <form class="form nav--shadow">
            <label for="email" class="card-head">
                Enter Your Email
            </label>
            <input class="form-input"
            type="email" name="" id="email" />
            <label for="pass" class="card-head">
                Enter Your Password
            </label>
            <input class="form-input" type="password" name="" id="pass" />

            <div class="forgot-pass">
                <label for="remem" class="remem-fl">
                    <input type="checkbox" name="" id="remem" />
                    <p class="cart-text">I accept all terms and conditions</p>
                </label>
            </div>

            <button class="btn btn-primary">
                Create New Account
            </button>

            <Link to="/login">
                <div class="cart-text">Already have an Account?</div>
            </Link>
        </form>
    </div>
    )
}

export {Signup}