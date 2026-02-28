import Link from 'next/link'

interface MobileMenuProps {
  items: Array<{ name: string; href: string }>
  onClose: () => void
}

export default function MobileMenu({ items, onClose }: MobileMenuProps) {
  return (
    <div className="border-t border-gray-200 pb-3 pt-2 md:hidden">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={onClose}
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
