"use client";

import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className={styles.searchContainer}>
      {/* Search Input */}
      <div className={styles.search}>
        <Search className={styles.searchIcon} size={20} />
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}
