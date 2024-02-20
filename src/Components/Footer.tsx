import Handles from "./Handles";

export default function Footer() {
  return (
    <footer>
      <div className="copyright"></div>
      <div className="info">
        <div>
            <h3>Address</h3>
            <p>Delhi, India</p>
        </div>
        <div>
            <h3>Write</h3>
            <p>anujk8097@gmail.com</p>
        </div>
        <div>
            <h3>Follow</h3>
            <div>
                <Handles/>
            </div>
        </div>
      </div>
    </footer>
  );
}
