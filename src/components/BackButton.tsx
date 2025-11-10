import Link from 'next/link';

interface BackButtonProps {
  href: string;
  label?: string;
}

const BackButton = ({ href, label = 'Назад' }: BackButtonProps) => {
  return (
    <Link
      href={href}
      style={{
        display: 'inline-block',
        textDecoration: 'none',
        color: '#ffffffff',
        margin: '5px',
        padding: '5px',
      }}
    > {label}
    </Link>
  );
};

export default BackButton;