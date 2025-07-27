import React, { useState } from 'react';

// 定义 FAQ 项目的类型
interface FaqItem {
  question: string;
  answer: string;
}

// 定义单个 FAQ 项目组件的 Props
interface FaqItemProps {
  item: FaqItem;
  index: number;
}

const FaqItemComponent: React.FC<FaqItemProps> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // 第一个默认展开

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-semibold text-lg cursor-pointer w-full text-left"
      >
        {item.question}
      </button>
      {/* 总是渲染内容，但用CSS控制显示 */}
      <div className={`mt-2 ${isOpen ? 'block' : 'hidden'}`}>
        <p 
          className="text-gray-600" 
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    </div>
  );
};

// 主 FAQ 组件的 Props
interface FaqProps {
  faqItems: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ faqItems }) => {
  return (
    <section id="faq" className="mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
      <div className="space-y-4">
        {faqItems?.map((item, index) => (
          <FaqItemComponent 
            key={index} 
            item={item} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq; 