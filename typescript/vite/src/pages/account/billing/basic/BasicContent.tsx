import { IHighlightedPostsItems, MiscHighlightedPosts } from '@/partials/misc';
import { Details, Invoicing, PaymentMethods, Plan } from './blocks';

const BasicContent = () => {
  const posts: IHighlightedPostsItems = [
    {
      icon: 'discount',
      title: 'Tailor-Made Plans Selection and Efficient Billing Systems',
      summary:
        'Select the perfect plan for your needs, complemented by an efficient, user-friendly billing system for convenience.',
      path: '#'
    },
    {
      icon: 'package',
      title: 'Customized Plans and Simple Billing Solutions',
      summary:
        'Offering an array of plans to suit diverse requirements, paired with straightforward, hassle-free billing processes.',
      path: '#'
    },
    {
      icon: 'cheque',
      title: 'Comprehensive Plan Options with Streamlined Billing',
      summary:
        'Our plans are crafted to cater to various user demands, accompanied by streamlined billing for maximum efficiency and clarity.',
      path: '#'
    }
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <Plan />
          <PaymentMethods />
          <Details />
          <Invoicing />
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <MiscHighlightedPosts posts={posts} />
        </div>
      </div>
    </div>
  );
};

export { BasicContent };
