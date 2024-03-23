import { KeenIcon } from '@/components';
const CompanyProfle = () => {
  const rows = [{
    icon: 'dribbble',
    text: 'https://duolingo.com',
    info: true
  }, {
    icon: 'facebook',
    text: 'duolingo',
    info: true
  }, {
    icon: 'youtube',
    text: 'duolingo-tuts',
    info: true
  }, {
    icon: 'whatsapp',
    text: '(31) 6-1235-4567',
    info: false
  }, {
    icon: 'map',
    text: 'Herengracht 501, 1017 BV Amsterdam, NL',
    info: false
  }];
  const products = [{
    label: 'Lingo Kids'
  }, {
    label: 'Lingo Express'
  }, {
    label: 'Fun Learning'
  }, {
    label: 'Lingo Espanol'
  }, {
    label: 'Speaking Mastery'
  }, {
    label: 'Grammar Guru'
  }, {
    label: 'Lingo Quest'
  }, {
    label: 'History Lessons'
  }, {
    label: 'Global Explorer'
  }, {
    label: 'Translator'
  }, {
    label: 'Webflow'
  }, {
    label: 'Language Lab'
  }, {
    label: 'Lingo Plus'
  }];
  const renderRows = row => {
    return <>
        <div className="flex items-center gap-2.5">
          <span className="">
            <KeenIcon icon={row.icon} className="text-lg text-gray-500" />
          </span>
          {row.info ? <a href={row.text} className="text-primary hover:text-primary-active text-sm font-medium">
              {row.text}
            </a> : <span className="text-sm font-medium text-gray-800">{row.text}</span>}
        </div>
      </>;
  };
  const renderProducts = product => {
    return <>
        <span className="badge badge-outline">{product.label}</span>
      </>;
  };
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">Company Profile</h3>
      </div>
      <div className="card-body">
        <h3 className="text-base font-semibold text-gray-900 leading-none mb-5">Headquarter</h3>

        <div className="flex flex-wrap items-center gap-5 mt-10">
          {/* <div className="rounded-xl w-full md:w-80 min-h-52" id="company_profile_map"></div> */}

          <div className="flex flex-col gap-2.5">
            {rows.map((row, index) => {
            return renderRows(row);
          })}
          </div>
        </div>

        <div className="grid gap-2.5 mb-7">
          <div className="text-md font-semibold text-gray-900">About</div>
          <p className="text-sm text-gray-700 font-medium leading-5.5">
            Now that I’m done thoroughly mangling that vague metaphor, let’s get down to business.
            You know you need to start blogging to grow your business, but you don’t know how. In
            this post, I’ll show you how to write a great blog post in five simple steps that people
            will actually want to read.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-2.5">
          <div className="text-md font-semibold text-gray-900">Products</div>
          <div className="flex flex-wrap gap-2.5">
            {products.map((product, index) => {
            return renderProducts(product);
          })}
          </div>
        </div>
      </div>
    </div>;
};
export { CompanyProfle };