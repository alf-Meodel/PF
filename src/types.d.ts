import { ThreeElements } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    mesh: any;
    boxGeometry: any;
    primitive: any;
  }
} 