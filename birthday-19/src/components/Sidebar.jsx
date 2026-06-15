import { IconCake, IconHeart, IconGamepad, IconMail } from "./Icons";
import "./Sidebar.css";

const menuItems = [
  { id: "birthday", icon: IconCake, label: "生日" },
  { id: "mood", icon: IconHeart, label: "心情" },
  { id: "games", icon: IconGamepad, label: "游戏" },
  { id: "letter", icon: IconMail, label: "信件" },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <nav className="sidebar" aria-label="主导航">
      <div className="sidebar-logo" aria-hidden="true">19</div>
      <div className="sidebar-nav" role="navigation">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              className={`sidebar-item${isActive ? " active" : ""}`}
              onClick={() => onNavigate(item.id)}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="sidebar-icon">
                <Icon size={22} />
              </span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
