import { Meta } from '@storybook/react/types-6-0'
import Button from './index'

export default {
	title: 'Example/Button',
	component: Button
} as Meta

const Template = args => <Button {...args} />

export const ExampleButton = Template.bind({})
