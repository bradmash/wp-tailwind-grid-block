// src/tailwind-grid-block/save.js
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
  const {
    columns  = 3,
    columnsSm,
    columnsMd,
    columnsLg,
    columnsXl,
    columns2Xl,
    gap      = 'gap-4',
    gapSm,
    gapMd,
    gapLg,
    gapXl,
    gap2Xl,
    layout   = 'grid',
    tagName  = 'div',
    ariaType,
    ariaValue,
    role,
  } = attributes;

  const twPrefix = 'tgb';

  // Build the grid or flex classes
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

  const className = `${layoutClass} ${gapClass}`;

  // Merge in ARIA & role if set
  const blockProps = useBlockProps.save({
    className,
    ...(ariaValue && { [ariaType]: ariaValue }),
    ...(role     && { role }),
  });

  // Swap in the chosen tag (div, section, etc.)
  const Tag = tagName;

  return (
    <Tag {...blockProps}>
      <InnerBlocks.Content />
    </Tag>
  );
}
