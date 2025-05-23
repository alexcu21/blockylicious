/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls} from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import metadata from './block.json';
import { Curve } from './components/Curve';

export default function Edit(props) {
	console.log(props);
	const {className, ...blockProps} = useBlockProps();
	return (
		<>
			<section className={`${className} alignfull`} {...blockProps}>
				{props.attributes.enableTopCurve && <Curve />}
			</section>
		
			<InspectorControls>
				<PanelBody title={__('Top Curve', metadata.textdomain)}>
					<div style={{ display:"flex" }}>
						<ToggleControl checked={props.attributes.enableTopCurve} onChange={(isChecked) => {
							props.setAttributes({ enableTopCurve: isChecked });
						}}/>
							<span>
								{__('Enable Top Curve', metadata.textdomain)}
							</span>
					</div>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
