export interface IGalleryItem {
	name: string
	posterPath: string
	link: string
	content?: {
		title: string
		subTitle?: string
	}
}

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'vertical' | 'horizontal'
}
