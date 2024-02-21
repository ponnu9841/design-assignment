import React, { Component } from "react";
import Slider from "react-slick";
import DishItem from "../dishListComponent/dish";

export default function SliderList(props) {
	const { menuList } = props;

	const [currentDishList, setCurrentDishList] = React.useState(menuList[0]);

	const settings = {
		dots: true,
		infinite: false,
		slidesToShow: 4,
		arrows: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

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
										className={`py-2 px-3 btn btn-ghost border-t-0 border-l-0 border-r-0 font-semibold ${
											isActive
												? "text-secondary border-b-1 border-secondary hover:border-b-1 hover:border-secondary"
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
					<div className="animate-[fadeIn_1s_ease-in-out]" key={index}>
						<div>
							<DishItem dishData={item} index={index} />
						</div>
						{index !== currentDishList?.category_dishes?.length - 1 && (
							<div className="divider my-0 "></div>
						)}
					</div>
				))}
			</div>
		</>
	);
}
