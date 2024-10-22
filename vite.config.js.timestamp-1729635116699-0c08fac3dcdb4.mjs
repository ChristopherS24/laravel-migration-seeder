// vite.config.js
import { defineConfig } from "file:///C:/MAMP/htdocs/laravel-migration-seeder/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/MAMP/htdocs/laravel-migration-seeder/node_modules/laravel-vite-plugin/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\MAMP\\htdocs\\laravel-migration-seeder";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: [
        // Compila il mio file scss in css (che verrà messo dentro public)
        "resources/scss/app.scss",
        "resources/js/app.js"
      ],
      refresh: true
    })
  ],
  resolve: {
    alias: {
      // Creiamo un nome alternativo al percorso /resources/
      "~resources": "/resources/",
      "~bootstrap": path.resolve(__vite_injected_original_dirname, "node_modules/bootstrap")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxNQU1QXFxcXGh0ZG9jc1xcXFxsYXJhdmVsLW1pZ3JhdGlvbi1zZWVkZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXE1BTVBcXFxcaHRkb2NzXFxcXGxhcmF2ZWwtbWlncmF0aW9uLXNlZWRlclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovTUFNUC9odGRvY3MvbGFyYXZlbC1taWdyYXRpb24tc2VlZGVyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgbGFyYXZlbCh7XG4gICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgIC8vIENvbXBpbGEgaWwgbWlvIGZpbGUgc2NzcyBpbiBjc3MgKGNoZSB2ZXJyXHUwMEUwIG1lc3NvIGRlbnRybyBwdWJsaWMpXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9zY3NzL2FwcC5zY3NzJyxcbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2pzL2FwcC5qcydcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgIC8vIENyZWlhbW8gdW4gbm9tZSBhbHRlcm5hdGl2byBhbCBwZXJjb3JzbyAvcmVzb3VyY2VzL1xuICAgICAgICAgICAgJ35yZXNvdXJjZXMnOiAnL3Jlc291cmNlcy8nLFxuICAgICAgICAgICAgJ35ib290c3RyYXAnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcCcpXG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStTLFNBQVMsb0JBQW9CO0FBQzVVLE9BQU8sYUFBYTtBQUNwQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ0osT0FBTztBQUFBO0FBQUEsUUFFSDtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsTUFDQSxTQUFTO0FBQUEsSUFDYixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBO0FBQUEsTUFFSCxjQUFjO0FBQUEsTUFDZCxjQUFjLEtBQUssUUFBUSxrQ0FBVyx3QkFBd0I7QUFBQSxJQUNsRTtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
