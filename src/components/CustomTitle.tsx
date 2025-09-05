interface CustomTitleProps {
  title: string;
  position?: 'left' | 'center' | 'right';
}

const CustomTitle = ({ title, position = 'left' }: CustomTitleProps) => {
  // classes dynamiques pour l'alignement
  const alignment =
    position === 'center'
      ? 'justify-center'
      : position === 'right'
        ? 'justify-end'
        : 'justify-start';

  return (
    <div className={`flex ${alignment} mb-6`}>
      <div className="inline-flex items-center px-3 py-2 rounded-full bg-[#E0E0E0] text-black text-sm font-medium">
        <span className="w-2 h-2 bg-gray-900 rounded-full mr-2"></span>
        {title}
      </div>
    </div>
  );
};

export default CustomTitle;
