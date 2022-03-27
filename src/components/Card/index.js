import BigCard from "./Big-Card";
import SmallCard from "./Small-Card";
import ModifyCard from "./Modify-Card";

const Types = [
	{
		id: "small",
		component: SmallCard,
	},
	{
		id: "big",
		component: BigCard,
	},
	{
		id: "modify",
		component: ModifyCard,
	},
];

const Card = ({ data, type }) => (
	Types.filter((item) => item.id === type).map((style, idx) => (
		<style.component
			key={String(idx)}
			data={data}
		/>
	))
);

export default Card