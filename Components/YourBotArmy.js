// YourBotArmy.js
import React from "react";
import "./YourBotArmy.css"; 

function YourBotArmy({ selectedBots, setSelectedBots, setBots }) {
    const removeFromArmy = (bot) => {
        setSelectedBots((prevSelectedBots) =>
            prevSelectedBots.filter((item) => item.id !== bot.id)
        );
        setBots((prevBots) => [...prevBots, bot]);
    };

    return (
        <div className="armybot">
            <h2 className="heading"></h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                {selectedBots.map((bot) => (
                    <div key={bot.id} className="" onClick={() => removeFromArmy(bot)}>
                        <img src={bot.avatar_url} className="bot-image" alt="" />
                        <div className="botinfo">
                            <h2>{bot.name}</h2>
                            {/* Add more bot info as needed */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default YourBotArmy;
