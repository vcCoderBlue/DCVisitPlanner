import React from 'react';

export const Favs = (props) => {
    return (
        <div>
          <div>
              <ul>
                {props.favorites.map((favorite, index) =>
                  <li key={favorite.id}>
                    {favorite}
                  </li>
                )}
              </ul>
          </div>
        </div>

    );
};
