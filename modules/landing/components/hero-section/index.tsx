'use client';
import React from 'react';
import { Button } from '@/shared/components/ui/Button';
import { PLATFORM, SWARMS_GITHUB } from '@/shared/constants/links';
import { cn } from '@/shared/utils/cn';
import { Github } from 'lucide-react';
import Link from 'next/link';
import Rive from '@rive-app/react-canvas';
const HeroSection = () => {
  return (
    <div className="mx-auto container md:pb-40 w-full flex-row flex h-screen items-center">
      <div className="flex-2 flex flex-col items-start px-4 py-8 sm:py-24 sm:px-6 lg:px-8 gap-6 text-left">
        <h1 className="text-6xl md:text-7xl font-bold text-primary">Swarms</h1>
        <h2 className="text-4xl md:text-7xl font-bold">
          Orchestrate Agents
        </h2>
        <span className="text-2xl font-medium">
          The Multi-Agent Collaboration Platform
        </span>
        <div className="flex flex-col bg-background rounded-xl overflow-hidden border-2 border-primary">
          <span className="w-full bg-primary text-white p-1">Terminal</span>
          <span className="p-3 text-white">pip3 install -U swarms</span>
        </div>
        <div className="flex gap-4 mt-8">
          <Link href={PLATFORM.DASHBOARD} target="_blank">
            <Button
              className={cn(
                'text-base flex gap-2 font-normal',
                'bg-primary',
                'hover:bg-primary/90',
                'text-white',
                'px-10 py-6',
                'rounded-md'
              )}
            >
              Swarms Cloud
            </Button>
          </Link>
          <Link href={SWARMS_GITHUB} target="_blank">
            <Button
              className={cn(
                'text-base flex gap-2 font-normal',
                'bg-white',
                'hover:bg-white/90',
                'text-background',
                'px-10 py-6',
                'rounded-md'
              )}
            >
              <Github size={18} />
              Github
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start px-4 py-8 sm:py-24 sm:px-6 lg:px-8 gap-6 text-left h-full">
        <Rive

            src={'/animation-hero.riv'}
            stateMachines="Branchs"
        />
      </div>
    </div>
  );
};

export default HeroSection;
