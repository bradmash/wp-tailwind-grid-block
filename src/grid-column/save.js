import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
  const { layout, tagName = 'div', ariaType, ariaValue, role } = attributes;

  const isFlex = layout === 'flex';
  const Tag = tagName;

  const twPrefix = 'tgb';

  const blockProps = useBlockProps.save({
    className: isFlex ? `${twPrefix}:flex-1` : '',
    ...(ariaValue && { [ariaType]: ariaValue }),
    ...(role && { role }),
  });

  return (
    <Tag {...blockProps}>
      <InnerBlocks.Content />
    </Tag>
  );
}
