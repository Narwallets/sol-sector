import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
import { Page, Popover } from '../../shared/components';
import { PopoverContent } from '../components/PopoverContent';
import { groups } from '../assets/clusters';
import { Galaxy as IGalaxy, Coords } from '../interfaces';

export function Galaxy() {
  const fontStyle = {
    fontSize: 8,
    fill: 'white'
  };
  const galaxyStyle = {
    ...fontStyle,
  };
  const clusterStyle = {
    ...fontStyle,
    fill: 'yellow',
  };

  const [coords, setCoords] = React.useState<Coords>({x:0, y:0});
  const [isPopoverVisible, setPopoverVisibility] = React.useState(false);
  const [galaxyFocused, setGalaxyFocused] = React.useState<IGalaxy>({x:0,y:0,text:''});

  const onGalaxyClick = (
    e: React.MouseEvent<SVGGElement, MouseEvent>,
    item: {x: number, y: number, text: string}
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const coords = {
      x: rect.x,
      y: rect.y + rect.height,
    };
    setCoords(coords);
    setPopoverVisibility(true);
    setGalaxyFocused(item);
  };
  const onHidePopover = () => {
    setPopoverVisibility(false);
  };

  return (
    <Page id="galaxy">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
        <circle cx="250" cy="250" r="249" stroke="blue" />
        <circle cx="250" cy="250" r="175" stroke="blue" />
        <circle cx="250" cy="250" r="95" stroke="blue" />
        <circle cx="250" cy="250" r="45" stroke="blue" />
        <line x1="250" y1="0" x2="250" y2="500" stroke="blue" />
        <line x1="0" y1="250" x2="500" y2="250" stroke="blue" />

        {groups.map((group) => 
          <g
            key={group.text}
            id={group.text}
          >
            <text
              x={group.x}
              y={group.y}
              style={clusterStyle}
            >
              {group.text}
            </text>
            {group.galaxies.map((galaxy) =>
            <g
              key={galaxy.text}
              id={galaxy.text}
              onClick={(e) => onGalaxyClick(e, galaxy)}
            >
              <circle
                cx={galaxy.x}
                cy={galaxy.y}
                r="1"
                stroke="white"
                fill="white"
              />
              <text
                x={galaxy.x}
                y={galaxy.y}
                style={galaxyStyle}
              >
                {galaxy.text}
              </text>
            </g>
            )}
          </g>
        )}
      </svg>
      <Popover
        id="popover-galaxy"
        {...coords}
        visibility={isPopoverVisible}
        onHide={onHidePopover}
      >
        <PopoverContent {...galaxyFocused} />
      </Popover>
    </Page>
  );
}
