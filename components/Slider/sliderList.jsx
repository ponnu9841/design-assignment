import React, { Component } from "react";
import Slider from "react-slick";
import DishItem from "../dishListComponent/dish";

export default function SliderList(props) {
	const { menuList } = props;

	const [currentDishList, setCurrentDishList] = React.useState(menuList[0]);

	const settings = {
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
	};

	// console.log(currentDishList)
	return (
		<>
			<div className="slider-container">
				<Slider {...settings}>
					{menuList?.map((item, index) => {
						let isActive = false;
						if (item?.menu_category_id == currentDishList?.menu_category_id) {
							isActive = true;
						}
						return (
							<div key={index} className="w-fit">
								<h1>
									<button
										className={`py-2 px-3 btn btn-ghost border-t-0 border-s-0 border-e-0 font-medium ${
											isActive
												? "text-secondary border-b-1 font-semibold border-secondary hover:border-b-1 hover:border-secondary"
												: ""
										}`}
										onClick={() => setCurrentDishList(item)}
									>
										{item?.menu_category}
									</button>
								</h1>
							</div>
						);
					})}
				</Slider>
			</div>

			<div className="mt-3">
			  {currentDishList?.category_dishes?.map((item, index) => (
  				<React.Fragment key={index}>
  					<div>
  						<DishItem dishData={item} index={index} />
  					</div>
  					{index !== currentDishList?.category_dishes?.length - 1 && (
  						<div className="divider my-0"></div>
  					)}
  				</React.Fragment>
  			))}
			</div>
		</>
	);
}
