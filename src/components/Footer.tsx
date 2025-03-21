
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white p-10">
      <div className="flex wrap justify-between m-auto max-w-[1200px]">
        <div className="flex-1 min-w-[-250px]">
          <h1>Stay up to Date</h1>
          <p className="text-sm mb-[15px]">
            Subscribe to our newsletter and get 20% discount offer on your first
            order.
          </p>
          <div className="flex items-center gap-13">
            <input
              className="flex-1 p-[8px]"
              type="email"
              placeholder="Enter your email"
            />
            <span>SUBMIT</span>
          </div>

          <div className="flex justify-between mt-[20px]">
            <div>
              <h3 className="text-[18px] mb-[6px]">SHOP</h3>
              <a href="#">Body Lotion</a>
              <a href="#">Computer Gadgets</a>
              <a href="#">Electronics</a>
              <a href="#">Fashion</a>
              <a href="#">General</a>
              <a href="#">Shoes</a>
            </div>
            <div>
              <h3 className="text-[18px] mb-[6px]">COMPANY</h3>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Help</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <h3 className="text-[18px] mb-[6px]">ABOUT</h3>
              <a href="#">Who We Are</a>
              <a href="#">Reviews</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>

        <div className="contacts">
          <h2>Happy to help</h2>
          <div className="contacts-details">
            <p className="text-[14px] mb-[6px]">1279 KN Street, BG</p>
            <p>Phone: +250-783-210-279</p>
            <p>Mail: uc@gmail.com</p>
          </div>
          <div className="flex gap-5 mt-5">
            <Facebook size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
            <Instagram size={20} />
          </div>

          <div className="acceptors">
            <img src="/footer-apple-payment.png" alt="Google Pay" />
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/MasterCard_Logo.svg"
              alt="Mastercard"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Apple_Pay_logo.svg"
              alt="Apple Pay"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
            /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
