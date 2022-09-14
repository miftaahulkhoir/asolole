export interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <div className="bg-green-500 text-white text-xs leading-3 py-1 px-2">{children}</div>;
};

export default Badge;
