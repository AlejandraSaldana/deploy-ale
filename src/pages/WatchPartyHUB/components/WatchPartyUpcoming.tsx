import type { WatchPartyUpcomingProps } from "../interfaces/index.interfaces";
import WatchPartyCard from "./WatchPartyCard";

export default function WatchPartyUpcoming({
  parties,
  onCardClick,
  onAddClick,
  isLoading,
}: WatchPartyUpcomingProps) {
  return (
    <section className="wp-upcoming">
      <h2 className="wp-upcoming__title">Tus Próximas Watch Parties</h2>
      <div className="wp-upcoming__row">

       
        {isLoading && (
          <>
            <div className="wp-skeleton" />
            <div className="wp-skeleton" />
          </>
        )}

      
        {!isLoading && parties.length === 0 && (
          <div className="wp-upcoming__empty">
            <p className="wp-upcoming__empty-text">
              Aún no tienes Watch Parties. ¡Crea una o únete a la de un amigo!
            </p>
          </div>
        )}

        
        {!isLoading &&
          parties.map((match) => (
            <WatchPartyCard
              key={match.code}          
              match={match}
              onClick={() => onCardClick?.(match)}
            />
          ))}

       
        {!isLoading && <WatchPartyCard variant="add" onClick={onAddClick} />}
      </div>
    </section>
  );
}