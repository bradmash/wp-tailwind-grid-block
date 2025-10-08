import { useEffect } from 'react';

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
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/** * WordPress Components
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {PanelBody, RangeControl, SelectControl, ToggleControl, TextControl} from '@wordpress/components';

/**
 * WordPress Data
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/
 */
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ clientId, attributes, setAttributes }) {
    const { columns, gap, layout, tagName, ariaType, ariaValue, role,
        columnsSm,
        columnsMd,
        columnsLg,
        columnsXl,
        columns2Xl,
        gapSm,
        gapMd,
        gapLg,
        gapXl,
        gap2Xl
     } = attributes;
    
    // ✅ Pull getBlockOrder from the block editor store
    const childIds = useSelect(
        (select) => select('core/block-editor').getBlockOrder(clientId),
        [clientId]
    );

    const { updateBlockAttributes } = useDispatch('core/block-editor');

    useEffect(() => {
        childIds.forEach((childId) => {
        updateBlockAttributes(childId, { layout });
        });
    }, [layout, childIds]);

    const twPrefix = 'tgb';

    const layoutClass = layout === 'flex' 
        ? `${twPrefix}:flex`
        : [
            `${twPrefix}:grid`,
            `${twPrefix}:grid-cols-${columns}`,
            columnsSm && `${twPrefix}:sm:grid-cols-${columnsSm}`,
            columnsMd && `${twPrefix}:md:grid-cols-${columnsMd}`,
            columnsLg && `${twPrefix}:lg:grid-cols-${columnsLg}`,
            columnsXl && `${twPrefix}:xl:grid-cols-${columnsXl}`,
            columns2Xl && `${twPrefix}:2xl:grid-cols-${columns2Xl}`,
        ].filter(Boolean).join(' ');

    const gapClass = [
        `${twPrefix}:${gap}`,
        gapSm && `${twPrefix}:sm:${gapSm}`,
        gapMd && `${twPrefix}:md:${gapMd}`,
        gapLg && `${twPrefix}:lg:${gapLg}`,
        gapXl && `${twPrefix}:xl:${gapXl}`,
        gap2Xl && `${twPrefix}:2xl:${gap2Xl}`,
    ].filter(Boolean).join(' ');

    const template = Array.from({ length: columns }, () => ['bmashblocks/grid-column', {layout: attributes.layout}, []]); 
    const Tag = tagName || 'div';
    const wrapperProps = useBlockProps({
        className: `${layoutClass} ${gapClass}`,
        ...(ariaValue && { [ariaType]: ariaValue }),
        ...(role && { role }),
    });
    return (
        <>
            <InspectorControls>
                <PanelBody title="Grid Settings" initialOpen={true}>
                    <SelectControl
                        label="Container Tag"
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
                        label="ARIA Type"
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

                    <ToggleControl
                        label="Use Flex Layout"
                        checked={layout === 'flex'}
                        onChange={(value) => setAttributes({ layout: value ? 'flex' : 'grid' })}
                    />                    
                    <RangeControl
                        label="Columns"
                        value={columns}
                        onChange={(value) => setAttributes({ columns: value })}
                        min={1}
                        max={12}
                    />
                    <SelectControl
                        label="Gap Size"
                        value={gap}
                        options={[
                            { label: 'None', value: 'gap-0' },
                            { label: 'Small', value: 'gap-2' },
                            { label: 'Medium', value: 'gap-4' },
                            { label: 'Large', value: 'gap-8' },
                        ]}
                        onChange={(value) => setAttributes({ gap: value })}
                    />
                </PanelBody>
                <PanelBody title="Responsive Layout" initialOpen={false}>
                    {/* All responsive RangeControl and SelectControl components here */}
                    <RangeControl
                        label="Columns (sm)"
                        value={attributes.columnsSm}
                        onChange={(value) => setAttributes({ columnsSm: value })}
                        min={1}
                        max={12}
                    />
                    <RangeControl
                        label="Columns (md)"
                        value={attributes.columnsMd}
                        onChange={(value) => setAttributes({ columnsMd: value })}
                        min={1}
                        max={12}
                    />
                    <RangeControl
                        label="Columns (lg)"
                        value={attributes.columnsLg}
                        onChange={(value) => setAttributes({ columnsLg: value })}
                        min={1}
                        max={12}
                    />
                    <RangeControl
                        label="Columns (xl)"
                        value={attributes.columnsXl}
                        onChange={(value) => setAttributes({ columnsXl: value })}
                        min={1}
                        max={12}
                    />
                    <RangeControl
                        label="Columns (2xl)"
                        value={attributes.columns2Xl}
                        onChange={(value) => setAttributes({ columns2Xl: value })}
                        min={1}
                        max={12}
                    />
                    <SelectControl
                        label="Gap (sm)"
                        value={attributes.gapSm}
                        options={[
                            { label: 'None', value: 'gap-0' },
                            { label: 'Small', value: 'gap-2' },
                            { label: 'Medium', value: 'gap-4' },
                            { label: 'Large', value: 'gap-8' },
                        ]}
                        onChange={(value) => setAttributes({ gapSm: value })}
                    />
                    <SelectControl
                        label="Gap (md)"
                        value={attributes.gapMd}
                        options={[
                            { label: 'None', value: 'gap-0' },
                            { label: 'Small', value: 'gap-2' },
                            { label: 'Medium', value: 'gap-4' },
                            { label: 'Large', value: 'gap-8' },
                        ]}
                        onChange={(value) => setAttributes({ gapMd: value })}
                    />

                    <SelectControl
                        label="Gap (lg)"
                        value={attributes.gapLg}
                        options={[
                            { label: 'None', value: 'gap-0' },
                            { label: 'Small', value: 'gap-2' },
                            { label: 'Medium', value: 'gap-4' },
                            { label: 'Large', value: 'gap-8' },
                        ]}
                        onChange={(value) => setAttributes({ gapLg: value })}
                    />
                    <SelectControl
                        label="Gap (xl)"
                        value={attributes.gapXl}
                        options={[
                            { label: 'None', value: 'gap-0' },
                            { label: 'Small', value: 'gap-2' },
                            { label: 'Medium', value: 'gap-4' },
                            { label: 'Large', value: 'gap-8' },
                        ]}
                        onChange={(value) => setAttributes({ gapXl: value })}
                    />
                    <SelectControl
                        label="Gap (2xl)"
                        value={attributes.gap2Xl}
                        options={[
                            { label: 'None', value: 'gap-0' },
                            { label: 'Small', value: 'gap-2' },
                            { label: 'Medium', value: 'gap-4' },
                            { label: 'Large', value: 'gap-8' },
                        ]}
                        onChange={(value) => setAttributes({ gap2Xl: value })}
                        __nextHasNoMarginBottom
                    />
                </PanelBody>
            </InspectorControls>

            <Tag {...wrapperProps}>
                <InnerBlocks
                    template={template}
                    allowedBlocks={['bmashblocks/grid-column']}
                    templateLock={false}
                    defaultBlock={{
                        name: 'bmashblocks/grid-column',
                        attributes: {
                            layout: attributes.layout, // pass layout to child
                        },
                    }}
                />
            </Tag>
        </>
    );
}


