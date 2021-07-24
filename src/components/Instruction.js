import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Instruction = () => {
  return (
    <Fragment>
      <div className="ins">
        (Tiếng việt) <br />
        --Bạn sẽ nhận được một con số ngẫu nhiên từ 0000 đến 9999 mỗi lần dự
        đoán bạn sẽ nhận được một gợi ý với số Red points và Blue points
        <br />
        <span style={{ color: "#e74c3c", fontWeight: "600" }}># Red Point</span>
        <br /> --Với mỗi một con số đúng và chính xác vị trí sẽ là 1 Red point{" "}
        <br />
        <span style={{ color: "#3498db", fontWeight: "600" }}>
          # Blue Point
        </span>
        <br />
        --Với mỗi một con số đúng và chính xác nhưng sai vị trí sẽ là 1 Blue
        Point
        <br />
        <span style={{ color: "#f39c12", fontWeight: "600" }}> # Lưu Ý</span>
        <br /> -- Ví dụ số đã cho là: 0100 <br />
        -- Số của bạn là: 0231 .Thì số Red Point là 1 (vì số 0 xuất hiện 1 lần
        và đúng vị trí ) và Blue Point là 1 (vì số 1 đã xuất hiện trong lựa chọn
        của bạn nhưng bạn đã đặt sai vị trí của nó)
        <br />{" "}
        <Link className="back-link" to="/">
          Back
        </Link>
      </div>
    </Fragment>
  );
};

export default Instruction;
