import { writable } from 'svelte/store';

const services = writable([]);

export const addService = (service) => {
  services.update((items) => [...items, service]);
};

export const deleteService = (id) => {
  services.update((items) => items.filter(item => item.id !== id));
};

export const updateService = (updatedService) => {
  services.update((items) => {
    return items.map(item => (item.id === updatedService.id ? updatedService : item));
  });
};

export default services;
