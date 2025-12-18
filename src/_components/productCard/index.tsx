import Button from '@/src/_components/button';
import styles from './style.module.css';

interface ProductCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  icon: React.ReactNode;
  isPremium?: boolean;
  badge?: string;
}

export default function ProductCard({
  title,
  price,
  period = '/mês',
  features,
  icon,
  isPremium = false,
  badge,
}: ProductCardProps) {
  return (
    <div className={`${styles.card} ${isPremium ? styles.cardPremium : ''}`}>
      {badge && <div className={styles.badge}>{badge}</div>}
      {isPremium && <div className={styles.overlay} />}
      
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        
        <h3 className={styles.title}>{title}</h3>
        
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}</span>
          <span className={styles.period}>{period}</span>
        </div>
        
        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index} className={styles.feature}>
              <svg className={styles.featureIcon} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button>Comprar Agora</Button>
      </div>
    </div>
  );
}
