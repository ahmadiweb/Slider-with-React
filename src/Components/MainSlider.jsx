import React from 'react'

export default function MainSlider() {
    return (
        <div className="slide-container">
            <div className="wrapper">
                <div className="arrow-wrapper">
                    <div className="round">
                        <div id="cta">
                            <span className="arrow prev"></span>
                        </div>
                    </div>
                </div>
                <div className="clash-card barbarian">
                    <div className="clash-card__image clash-card__image--barbarian">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt="barbarian" />
                    </div>
                    <div className="clash-card__level clash-card__level--barbarian">Level 4</div>
                    <div className="clash-card__unit-name">The Barbarian</div>
                    <div className="clash-card__unit-description">
                        The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for
                        destruction. He has Killer yellow horseshoe mustache.
                    </div>

                    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                        <div className="one-third">
                            <div className="stat">20<sup>S</sup></div>
                            <div className="stat-value">Training</div>
                        </div>

                        <div className="one-third">
                            <div className="stat">16</div>
                            <div className="stat-value">Speed</div>
                        </div>

                        <div className="one-third no-border">
                            <div className="stat">150</div>
                            <div className="stat-value">Cost</div>
                        </div>

                    </div>

                </div>
                <div className="arrow-wrapper">
                    <div className="round">
                        <div id="cta">
                            <span className="arrow next"></span>
                        </div>
                    </div>
                </div>

            </div>



            <div className="wrapper">
                <div className="clash-card archer">
                    <div className="clash-card__image clash-card__image--archer">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png" alt="archer" />
                    </div>
                    <div className="clash-card__level clash-card__level--archer">Level 5</div>
                    <div className="clash-card__unit-name">The Archer</div>
                    <div className="clash-card__unit-description">
                        The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape,
                        a leather belt and an attached small pouch.
                    </div>

                    <div className="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
                        <div className="one-third">
                            <div className="stat">25<sup>S</sup></div>
                            <div className="stat-value">Training</div>
                        </div>

                        <div className="one-third">
                            <div className="stat">24</div>
                            <div className="stat-value">Speed</div>
                        </div>

                        <div className="one-third no-border">
                            <div className="stat">300</div>
                            <div className="stat-value">Cost</div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="wrapper">
                <div className="clash-card giant">
                    <div className="clash-card__image clash-card__image--giant">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png" alt="giant" />
                    </div>
                    <div className="clash-card__level clash-card__level--giant">Level 5</div>
                    <div className="clash-card__unit-name">The Giant</div>
                    <div className="clash-card__unit-description">
                        Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show
                        them a turret or cannon and you'll see their fury unleashed!
                    </div>

                    <div className="clash-card__unit-stats clash-card__unit-stats--giant clearfix">
                        <div className="one-third">
                            <div className="stat">2<sup>M</sup></div>
                            <div className="stat-value">Training</div>
                        </div>

                        <div className="one-third">
                            <div className="stat">12</div>
                            <div className="stat-value">Speed</div>
                        </div>

                        <div className="one-third no-border">
                            <div className="stat">2250</div>
                            <div className="stat-value">Cost</div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="wrapper">
                <div className="clash-card goblin">
                    <div className="clash-card__image clash-card__image--goblin">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png" alt="goblin" />
                    </div>
                    <div className="clash-card__level clash-card__level--goblin">Level 5</div>
                    <div className="clash-card__unit-name">The Goblin</div>
                    <div className="clash-card__unit-description">
                        These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap,
                        and their hunger for resources is limitless.
                    </div>

                    <div className="clash-card__unit-stats clash-card__unit-stats--goblin clearfix">
                        <div className="one-third">
                            <div className="stat">30<sup>S</sup></div>
                            <div className="stat-value">Training</div>
                        </div>

                        <div className="one-third">
                            <div className="stat">32</div>
                            <div className="stat-value">Speed</div>
                        </div>

                        <div className="one-third no-border">
                            <div className="stat">100</div>
                            <div className="stat-value">Cost</div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="wrapper">
                <div className="clash-card wizard">
                    <div className="clash-card__image clash-card__image--wizard">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png" alt="wizard" />
                    </div>
                    <div className="clash-card__level clash-card__level--wizard">Level 6</div>
                    <div className="clash-card__unit-name">The Wizard</div>
                    <div className="clash-card__unit-description">
                        The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and
                        cast concentrated blasts of destruction on anything, land or sky!
                    </div>

                    <div className="clash-card__unit-stats clash-card__unit-stats--wizard clearfix">
                        <div className="one-third">
                            <div className="stat">5<sup>M</sup></div>
                            <div className="stat-value">Training</div>
                        </div>

                        <div className="one-third">
                            <div className="stat">16</div>
                            <div className="stat-value">Speed</div>
                        </div>

                        <div className="one-third no-border">
                            <div className="stat">4000</div>
                            <div className="stat-value">Cost</div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
