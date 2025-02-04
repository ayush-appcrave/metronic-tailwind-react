import { Accordion, AccordionItem } from '@/components/accordion';
const MiscFaq = () => {
  const items = [
    {
      title: 'Faq 1 ?',
      text: 'Faq 1',
    },
  ];
  const generateItems = () => {
    return (
      <Accordion allowMultiple={false}>
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title}>
            {item.text}
          </AccordionItem>
        ))}
      </Accordion>
    );
  };
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">FAQ</h3>
      </div>
      <div className="card-body py-3">{generateItems()}</div>
    </div>
  );
};
export { MiscFaq };
