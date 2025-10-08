import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InnerBlocks,
    InspectorControls,
    store as blockEditorStore
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    TextControl,
} from '@wordpress/components';
import './editor.scss';

import { getBlockTypes } from '@wordpress/blocks';

import { useSelect } from '@wordpress/data';


export default function Edit({ clientId, attributes, setAttributes }) {
  // Grab the parent block’s attributes:
    const parentAttributes = useSelect(
        (select) => {
            const { getBlockParentsByBlockName, getBlock } = select(blockEditorStore);
            const [parentId] = getBlockParentsByBlockName(clientId, 'bmashblocks/tailwind-grid-block') || [];
            return parentId ? getBlock(parentId)?.attributes : {};
        },
        [clientId]
    );

    const twPrefix = 'tgb';
    const layout = parentAttributes.layout || 'grid';
    const columnClass = layout === 'flex' ? `${twPrefix}:flex-1` : '';    

    const { tagName, ariaType, ariaValue, role } = attributes;
    const blockProps = useBlockProps();
    const Tag = tagName || 'div';
    const TEMPLATE = [['core/paragraph', { placeholder: 'Add content…' }]];
    const wrapperAttrs = {
        ...blockProps,
        className: columnClass,
        ...(ariaValue && { [ariaType]: ariaValue }),
        ...(role && { role }),
    };
    const allowedBlocks = getBlockTypes()
        .map((block) => block.name)
        .filter((name) => !name.startsWith('bmashblocks/tailwind-grid-block'));

    return (
        <>
            <InspectorControls>
                <PanelBody title="Column Settings" initialOpen={true}>
                    <SelectControl
                        label="HTML Tag"
                        value={tagName}
                        options={[
                            { label: 'div', value: 'div' },
                            { label: 'section', value: 'section' },
                            { label: 'article', value: 'article' },
                            { label: 'aside', value: 'aside' },
                            { label: 'main', value: 'main' },
                        ]}
                        onChange={(value) => setAttributes({ tagName: value })}
                    />

                    <SelectControl
                        label="ARIA Attribute"
                        value={ariaType}
                        options={[
                            { label: 'aria-label', value: 'aria-label' },
                            { label: 'aria-labelledby', value: 'aria-labelledby' },
                        ]}
                        onChange={(value) => setAttributes({ ariaType: value })}
                    />

                    <TextControl
                        label="ARIA Value"
                        value={ariaValue}
                        onChange={(value) => setAttributes({ ariaValue: value })}
                    />

                    <TextControl
                        label="Role"
                        value={role}
                        onChange={(value) => setAttributes({ role: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <Tag {...wrapperAttrs}>
                <InnerBlocks
                    allowedBlocks={allowedBlocks}
                    template={TEMPLATE}
                    templateLock={false}
                />
            </Tag>
        </>
    );
}
