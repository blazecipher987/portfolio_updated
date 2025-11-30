"use client";
import { FaGithub, FaFileAlt, FaUserTie, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/hooks";

type ResearchProps = {
  title: string;
  description: string;
  collaborators: ReadonlyArray<{ name: string; url: string }>;
  supervisor: Readonly<{ name: string; url: string }> | null; // Optional supervisor
  awards?: ReadonlyArray<{ title: string; event: string; year: number; status?: string }>;
  status?: string;
  codeUrl?: string;
  posterUrl?: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function ResearchItem({
  title,
  description,
  collaborators,
  supervisor,
  awards,
  status,
  codeUrl,
  posterUrl,
}: ResearchProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 transition-transform max-w-[38rem] mx-auto hover:shadow-2xl hover:scale-105"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{description}</p>

        {/* Supervisor Section */}
        {supervisor && supervisor.name && (
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <FaUserTie className="mr-2 text-blue-500" />
            <strong>Supervisor:</strong>&nbsp;
            <a
              href={supervisor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {supervisor.name}
            </a>
          </div>
        )}

        {/* Collaborators Section */}
        {collaborators.length > 0 && (
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <FaUsers className="mr-2 text-green-500" />
            <strong>Collaborators:</strong>&nbsp;
            {collaborators.map((collaborator, index) => (
              <span key={index}>
                <a
                  href={collaborator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {collaborator.name}
                </a>
                {index < collaborators.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}

        {status && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          <strong>Status:</strong> {status}
        </p>
        )}


        {/* Awards Section */}
        {awards && awards.length > 0 && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Awards:</strong>
            <ul className="list-disc list-inside mt-1">
              {awards.map((award, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {award.title} - {award.event} ({award.year})
                  {award.status && ` (${award.status})`}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links to Code and Poster */}
        <div className="flex space-x-4 mt-4">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              <FaGithub className="text-2xl" />
            </a>
          )}
          {posterUrl && (
            <a
              href={posterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              <FaFileAlt className="text-2xl" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ResearchItem;
