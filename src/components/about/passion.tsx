interface PassionProps {
  colors: string[];
  title: string;
  text: string;
}

export default function Passion({ colors, title, text }: PassionProps) {
  return (
    <div className="flex items-start">
      <div
        className={`${colors[1]} dark:${colors[2]} p-1 rounded-full mr-3 mt-1`}
      >
        <div
          className={`w-2 h-2 ${colors[3]} dark:${colors[4]} rounded-full`}
        ></div>
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
      </div>
    </div>
  );
}
