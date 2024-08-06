import Layout from "@theme/Layout"

import { Header, Cards, CardProps } from "@site/src/components/Highlights"

const features: CardProps[] = [
	{
		title: "Yazi",
		video: "/videos/search.mp4",
		description: "Open and manage your files with the power of async rust.",
	},
	{
		title: "Scrollable Preview",
		video: "/videos/scrollable-preview.mp4",
		description: "Preview various types of files, and scroll the content of file while previewing.",
	},
]

export default function Features(): JSX.Element {
	return (
		<Layout title="Features" description="List of Yazi's features.">
			<main className="margin-vert--lg">
				<Header
					heading="Features"
					description="List of features shipped with Yazi."
					link={{
						emoji: "✨",
						text: "Suggest a feature!",
						to: "https://github.com/sxyazi/yazi/issues/new?template=feature.yml",
					}}
				/>
				<Cards from={features} />
			</main>
		</Layout>
	)
}
