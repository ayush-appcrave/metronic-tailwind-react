type Props = {
    children?: React.ReactNode;
  };


const Wrapper = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  );
};

export { Wrapper };
