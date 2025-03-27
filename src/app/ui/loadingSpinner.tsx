'use client';

import {Skeleton} from '@douyinfe/semi-ui'

export default function LoadingSpinner() {
    const placeholderCount = 5;
  return (
    
    <div
    style={{
      /* 使用 CSS Grid 来布局 */
      display: 'grid',
      /* 自动填充列，单元格最小宽度 350px，大于这个值会自动缩放 */
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '16px', // 网格间距
      padding: '16px'
    }}
  >
    {Array.from({ length: placeholderCount }).map((_, index) => (
      <Skeleton
      active
        key={index}
        /* 设置一个图片占位 */
        placeholder={
          <Skeleton.Image
            style={{
              /* 宽度 100% 可以让它自适应 350px 的最小列宽 */
              width: '100%',
              /* 高度可以根据你想要的比例来定，比如 200px、300px 等 */
              height: '600px',
              backgroundColor: '#696969'
            }}
          />
        }
        loading={true}
      >
        {/* loading=true 时这里不会显示，仅作结构示例 */}
        <div style={{ width: '100%', height: '250px' }} />
      </Skeleton>
    ))}
  </div>
    
  );
}