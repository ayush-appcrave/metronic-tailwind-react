import { KeenIcon } from '@/components';

import { IFaqItem, IFaqItems } from './types';

const MiscFaq = () => {
  const items: IFaqItems = [
    {
      title: 'How is pricing determined for each plan ?', 
      text: 'Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project\'s needs and budget. Understanding the factors influencing each plan\'s pricing helps you make an informed decision. Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project\'s needs and budget. Understanding the factors influencing each plan\'s pricing helps you make an informed decision. Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project\'s needs and budget. Understanding the factors influencing each plan\'s pricing helps you make an informed decision'
    },
    {
      title: 'What payment methods are accepted for subscriptions ?', 
      text: 'Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project\'s needs and budget. Understanding the factors influencing each plan\'s pricing helps you make an informed decision'
    },
    {
      title: 'Are there any hidden fees in the pricing ?', 
      text: 'Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project\'s needs and budget. Understanding the factors influencing each plan\'s pricing helps you make an informed decision'
    },
    {
      title: 'Is there a discount for annual subscriptions ?', 
      text: 'Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project\'s needs and budget. Understanding the factors influencing each plan\'s pricing helps you make an informed decision'
    },
    {
      title: 'Do you offer refunds on subscription cancellations ?', 
      text: 'Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project\'s needs and budget. Understanding the factors influencing each plan\'s pricing helps you make an informed decision'
    },
    {
      title: 'Can I add extra features to my current plan ?', 
      text: 'Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project\'s needs and budget. Understanding the factors influencing each plan\'s pricing helps you make an informed decision'
    }
  ];

  const renderItem = (item: IFaqItem, index: number) => {
    return (
      <div
        key={index}
        className="accordion-item [&:not(:last-child)]:border-b border-b-gray-200"
        data-accordion-item="true"
      >
        <button data-accordion-toggle="#faq_{{ loop.index }}_content" className="accordion-toggle py-4">
          <span className="text-base text-gray-900">{item.title}</span>

          <KeenIcon icon="plus" className="text-gray-600 text-sm accordion-active:hidden block" />
          <KeenIcon icon="minus" className="text-gray-600 text-sm accordion-active:block hidden" />
        </button>
        <div id="faq_{{ loop.index }}_content" className="accordion-content hidden">
          <div className="text-gray-700 text-md pb-4">
            {item.text}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">FAQ</h3>
      </div>
      <div className="card-body py-3">
        <div data-accordion="true" data-accordion-expand-all="true">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export { MiscFaq };
