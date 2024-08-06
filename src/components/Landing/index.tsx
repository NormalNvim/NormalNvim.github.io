import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

type CardProps = {
	title: string
	Svg: React.ComponentType<React.ComponentProps<"svg">>
	description: JSX.Element
}

const cards: CardProps[] = [
	{
		title: "Full Asynchronous Support",
		Svg: require("@site/static/img/task.svg").default,
		description: (
			<>
				Plugins are loaded asynchronously using Lazy, making the most of available
				resources.
			</>
		),
	},
	{
		title: "IDE Ready",
		Svg: require("@site/static/img/async.svg").default,
		description: <>Save weeks of tweaking Neovim by starting from a well tested environment.</>,
	},
	{
		title: "Compiler",
		Svg: require("@site/static/img/code.svg").default,
		description: <>Press F6 to run your code, no matter the language.</>,
	},
	{
		title: "You get what you see",
		Svg: require("@site/static/img/image.svg").default,
		description: <>No hidden complexity. All you see is all there is to it.</>,
	},
]

function Card({ title, Svg, description }: CardProps) {
	return (
		<div className={clsx("col col--3")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function Landing(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{cards.map((props, idx) => (
						<Card key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
