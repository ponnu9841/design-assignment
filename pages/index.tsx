import axios from "axios";
import React from "react";
import { DishType } from "@/types/dish.type";
import Layout from "@/components/layout/layout";
import Dish from "@/components/dishListComponent/dish";
import SliderList from "@/components/Slider/sliderList";

interface Dish {
  loading : boolean;
  data: DishType[] | null;
  error: any;
}

export default function Home() {

	const [dishCategory, setDishCategory] = React.useState<Dish>({
		loading: true,
		data: null,
		error: null,
	});

	React.useEffect(() => {
		setDishCategory((prevState) => ({ ...prevState, loading: true }));
		axios
			.get("https://run.mocky.io/v3/db0018c8-5982-4d89-a54f-f51fe14d3c89")
			.then((response) => {
				if (response.status == 200) {
					setDishCategory((prevState) => ({
						...prevState,
						data: response.data.data,
					}));
				} else {
					setDishCategory((prevState) => ({ ...prevState, data: null }));
				}
			})
			.catch((error) =>
				setDishCategory((prevState) => ({ ...prevState, error: error }))
			)
			.finally(() =>
				setDishCategory((prevState) => ({ ...prevState, loading: false }))
			);
	}, []);

	let restaurantName = "", menuList = null

	if(dishCategory?.data){
		restaurantName = dishCategory?.data[0]?.restaurant_name;
		menuList = dishCategory?.data[0]?.table_menu_list

	}

	if (dishCategory?.loading) {
		return (
			<Layout>
				<div className="min-h-[500px] w-full flex items-center justify-center">
					<progress className="progress w-56 bg-primary "></progress>
				</div>
			</Layout>
		);
	}


	return (
		<Layout restaurantName={restaurantName}>
			<SliderList menuList={menuList}/>
		</Layout>
	)
}
