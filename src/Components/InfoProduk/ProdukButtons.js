import React from "react";

const ProdukButtons = () => {
	return (
		<div className="d-flex produk_btnGroup">
			<div className="">
				<button className="produk_btn1 text_reguler" type="button">
					Preview
				</button>
			</div>
			<div className="">
				<button className="produk_btn2 text_reguler" type="button">
					Terbitkan
				</button>
			</div>
		</div>
	);
};

export default ProdukButtons;
